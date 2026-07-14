import { useEffect, useState } from "react";
import { getExperiences } from "../services/experienceService";

export default function useExperience() {

    const [experiences, setExperiences] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        fetchExperiences();

    }, []);

    async function fetchExperiences() {

        try {

            const data = await getExperiences();

            setExperiences(data);

        }

        catch (err) {

            setError(err);

        }

        finally {

            setLoading(false);

        }

    }

    return {

        experiences,

        loading,

        error,

        refresh: fetchExperiences,

    };

}