import api from "../api/axios";

export async function getCertificates() {

    const response = await api.get("/certificates/");

    return response.data;

}

export async function createCertificate(data) {

    const response = await api.post(

        "/certificates/",

        data,

        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

    );

    return response.data;

}

export async function updateCertificate(id, data) {

    const response = await api.put(

        `/certificates/${id}/`,

        data,

        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

    );

    return response.data;

}

export async function deleteCertificate(id) {

    await api.delete(`/certificates/${id}/`);

}