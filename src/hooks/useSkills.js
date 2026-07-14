import { useEffect, useState } from "react";
import { getSkills } from "../services/skillService";

export default function useSkills() {

    const [skills, setSkills] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        loadSkills();

    }, []);

    async function loadSkills() {

        try {

            const data = await getSkills();

            setSkills(data);

        }

        catch (err) {

            setError(err);

        }

        finally {

            setLoading(false);

        }

    }

    return {

        skills,

        loading,

        error,

    };

}