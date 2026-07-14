import api from "../api/axios";

export async function getMessages() {

    const response = await api.get("/messages/");

    return response.data;

}

export async function updateMessage(id, data) {

    const response = await api.put(

        `/messages/${id}/`,

        data

    );

    return response.data;

}

export async function deleteMessage(id) {

    await api.delete(`/messages/${id}/`);

}

export async function sendMessage(data) {

    const response = await api.post(

        "/messages/",

        data

    );

    return response.data;

}