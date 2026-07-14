import { useEffect, useState } from "react";
import { getCertificates } from "../services/certificateService";

export default function useCertificate() {

    const [certificates, setCertificates] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        fetchCertificates();

    }, []);

    async function fetchCertificates() {

        try {

            const data = await getCertificates();

            setCertificates(data);

        }

        catch (err) {

            setError(err);

        }

        finally {

            setLoading(false);

        }

    }

    return {

        certificates,

        loading,

        error,

        refresh: fetchCertificates,

    };

}