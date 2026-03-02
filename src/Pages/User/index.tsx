import { useState } from "react";
import { BreadCrumb } from "../../Components/Common";
import { useAppSelector, useAppDispatch } from "../../Store/Hook";
import { ImagePath } from "../../Constants";
import { Mutation } from "../../Api";
import { setUser } from "../../Store/Slices/UserSlice";
import { STORAGE_KEYS } from "../../Constants/StorageKeys";
import { AntdNotification } from "../../Utils/AntNotification";
import { notification, Modal, Upload } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormInput } from "../../Components/FormFields";
import { UploadOutlined } from "@ant-design/icons";

const UserProfile = () => {
    const { user } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileUrl, setProfileUrl] = useState(user?.profilePhoto || "");

    const updateMutation = Mutation.useUpdateUser();
    const uploadMutation = Mutation.useUpload();

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full name is required"),
        phoneNumber: Yup.string().required("Phone number is required"),
        email: Yup.string().email("Invalid email address").required("Email address is required"),
        designation: Yup.string(),
    });

    const handleUpdate = (values: any) => {
        const payload = { ...values, profilePhoto: profileUrl, userId: user?._id };
        updateMutation.mutate(payload, {
            onSuccess: () => {
                AntdNotification(notification, "success", "Profile updated successfully!");
                const updatedUser = { ...user, ...payload };
                dispatch(setUser(updatedUser));
                localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updatedUser));
                setIsModalOpen(false);
            },
            onError: (err: any) => {
                AntdNotification(notification, "error", err.message || "Update failed");
                setIsModalOpen(false);

            },
        });
    };

    const handleUpload = (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        uploadMutation.mutate(formData, {
            onSuccess: (data: any) => {
                setProfileUrl(data?.data?.url);
                AntdNotification(notification, "success", "Image uploaded successfully!");
            },
            onError: (err: any) => {
                AntdNotification(notification, "error", "Upload failed");
            },
        });
        return false; // Prevent automatic upload
    };

    return (
        <>
            <BreadCrumb title="My Profile" />
            <div className="profile-page-area py-10! container-p">
                <div className="edublink-container">
                    <div className="edublink-row flex justify-center">
                        <div className="edublink-col-lg-8 px-0!">
                            <div className="profile-overview pb-10 px-0! ">
                                <div className="profile-header flex max-sm:flex-col items-center gap-6 mb-8">
                                    <div className="profile-img-wrapper w-32 h-32 rounded-full overflow-hidden border-2 border-primary">
                                        <img
                                            src={user?.profilePhoto || `${ImagePath}others/author.png`}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="profile-info flex-1 ">
                                        <p className="text-3xl font-bold mb-1 my-0! text-black!">{user?.fullName || "User Name"}</p>
                                        <p className="text-2xl!  mb-0 opacity-80 my-0! text-black!">{user?.designation || "No Designation"}</p>
                                        <p className="text-base  my-0! text-black!">{user?.email}</p>
                                    </div>
                                </div>

                                <div className="profile-details-grid grid grid-cols-2 max-sm:grid-cols-1 gap-y-6 gap-x-12 py-8!">
                                    <div className="detail-item">
                                        <label className=" text-gray-400 block mb-1 uppercase font-bold tracking-widest ">Full Name</label>
                                        <p className="text-2xl! font-medium text-gray-700">{user?.fullName}</p>
                                    </div>
                                    <div className="detail-item">
                                        <label className=" text-gray-400 block mb-1 uppercase font-bold tracking-widest ">Email Address</label>
                                        <p className="text-2xl! font-medium text-gray-700">{user?.email}</p>
                                    </div>
                                    <div className="detail-item">
                                        <label className=" text-gray-400 block mb-1 uppercase font-bold tracking-widest ">Phone Number</label>
                                        <p className="text-2xl! font-medium text-gray-700">{user?.phoneNumber || "N/A"}</p>
                                    </div>
                                    <div className="detail-item">
                                        <label className=" text-gray-400 block mb-1 uppercase font-bold tracking-widest ">Designation</label>
                                        <p className="text-2xl! font-medium text-gray-700">{user?.designation || "N/A"}</p>
                                    </div>
                                </div>

                                <div className="mt-10 flex max-sm:justify-center">
                                    <button
                                        className="edu-btn btn-medium px-10!"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        Edit Profile <i className="icon-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                title={null}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                centered
                width={600}
                closeIcon={<i className="icon-73 text-2xl!" />}
                className="profile-edit-modal"
            >
                <div className="p-2 sm:p-5!">
                    <div className="mb-8! ">
                        <p className="text-3xl sm:text-5xl font-bold text-gray-800 my-2!">
                            Edit Profile
                        </p>
                    </div>

                    <div className="upload-section mb-8 flex flex-col items-center gap-4">
                        <div className="relative">
                            <img
                                src={profileUrl || `${ImagePath}others/author.png`}
                                className="w-28 h-28 rounded-full object-cover border-2 border-gray-100 shadow-sm"
                                alt="Preview"
                            />
                        </div>
                        <Upload
                            beforeUpload={handleUpload}
                            showUploadList={false}
                        >
                            <button type="button" className="edu-btn btn-border btn-small py-2! px-5!">
                                <UploadOutlined /> Change Photo
                            </button>
                        </Upload>
                    </div>

                    <Formik
                        initialValues={{
                            fullName: user?.fullName || "",
                            email: user?.email || "",
                            phoneNumber: user?.phoneNumber || "",
                            designation: user?.designation || "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleUpdate}
                    >
                        {() => (
                            <Form className="woocommerce-form woocommerce-form-register register auth-form">
                                <FormInput
                                    label="Full Name *"
                                    name="fullName"
                                    id="fullName"
                                    containerClassName="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                />
                                <FormInput
                                    label="Email Address *"
                                    name="email"
                                    id="email"
                                    containerClassName="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                />
                                <FormInput
                                    label="Phone Number *"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    containerClassName="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                />
                                <FormInput
                                    label="Designation"
                                    name="designation"
                                    id="designation"
                                    containerClassName="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                />

                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        className="main-header-btn edu-btn btn-medium w-full!"
                                        disabled={updateMutation.isPending}
                                    >
                                        {updateMutation?.isPending ? "Saving Changes..." : "Save Changes"}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Modal>
        </>
    );
};

export default UserProfile;
