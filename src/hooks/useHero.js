import { useEffect, useState } from "react";
import { getHero } from "../services/heroService";

export default function useHero() {

    const [hero, setHero] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        fetchHero();

    }, []);

    async function fetchHero() {

        try {

            const data = await getHero();

            setHero(data);

        } catch (err) {

            setError(err);

        } finally {

            setLoading(false);

        }

    }

    return {
        hero,
        loading,
        error,
        reload: fetchHero,
    };

}