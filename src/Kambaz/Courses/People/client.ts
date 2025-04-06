import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const fetchAllEnrollments = async () => {
    const { data } = await axiosWithCredentials.get(ENROLLMENTS_API);
    return data;
};

export const deleteEnrollment = async (enrollmentId: string) => {
    const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
    return response.data;
};

export const createNewEnrollment = async (enrollment: any) => {
    const response = await axiosWithCredentials.post(ENROLLMENTS_API, enrollment);
    return response.data;
};