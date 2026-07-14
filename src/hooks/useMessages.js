import { useEffect, useState } from "react";
import { getMessages } from "../services/messageService";

export default function useMessages() {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        fetchMessages();

    }, []);

    async function fetchMessages() {

        try {

            const data = await getMessages();

            setMessages(data);

        }

        catch (err) {

            setError(err);

        }

        finally {

            setLoading(false);

        }

    }

    return {

        messages,

        loading,

        error,

        refresh: fetchMessages,

    };

}