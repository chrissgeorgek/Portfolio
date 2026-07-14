import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

export default function useProjects() {

    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        fetchProjects();

    }, []);

    async function fetchProjects() {

        try {

            const data = await getProjects();

            setProjects(data);

        }

        catch (err) {

            console.log(err);

            setError(err);

        }

        finally {

            setLoading(false);

        }

    }

    return {

        projects,

        loading,

        error,

        refresh: fetchProjects,

    };

}