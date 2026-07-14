import { useEffect, useState } from "react";
import { getEducations } from "../services/educationService";

export default function useEducation() {

    const [educations, setEducations] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        fetchEducation();

    }, []);

    async function fetchEducation() {

        try {

            const data = await getEducations();

            setEducations(data);

        }

        catch (err) {

            setError(err);

        }

        finally {

            setLoading(false);

        }

    }

    return {

        educations,

        loading,

        error,

        refresh: fetchEducation,

    };

}