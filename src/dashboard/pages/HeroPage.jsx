import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

import HeroForm from "../components/hero/HeroForm";
import HeroImageCard from "../components/hero/HeroImageCard";

import {
  getHero,
  updateHero,
} from "../../services/heroService";

export default function HeroPage() {

  const [hero, setHero] = useState(null);

  const [formData, setFormData] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    loadHero();

  }, []);

  async function loadHero() {

    const data = await getHero();

    setHero(data);

    setFormData(data);

  }

  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  }

  function handleFileChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.files[0],

    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);

    const data = new FormData();

Object.keys(formData).forEach((key) => {

    // Skip empty values
    if (formData[key] === null || formData[key] === undefined) {
        return;
    }

    // Only append a new profile image if a File was selected
    if (
        key === "profile_image" &&
        !(formData.profile_image instanceof File)
    ) {
        return;
    }

    // Only append a new resume if a File was selected
    if (
        key === "resume" &&
        !(formData.resume instanceof File)
    ) {
        return;
    }

    data.append(key, formData[key]);

});

    try {

      const updated = await updateHero(data);
      await loadHero();

      setHero(updated);

      setFormData(updated);

      toast.success("Hero updated successfully!");

    }

    catch (err) {

      console.log("Status:", err.response?.status);
  
      console.log("Data:", err.response?.data);
  
      toast.error("Failed to update Hero.");
  
  }

    finally {

      setLoading(false);

    }

  }

  if (!hero)

    return (

      <div className="text-white p-10">

        Loading...

      </div>

    );

  return (

    <div>

      <PageHeader

        title="Hero Management"

        subtitle="Manage your portfolio landing page"

      />

      <form onSubmit={handleSubmit}>

        <div className="grid lg:grid-cols-3 gap-8">

          <HeroImageCard

            hero={hero}

            handleFileChange={handleFileChange}

          />

          <Card className="lg:col-span-2 p-8">

            <HeroForm

              formData={formData}

              handleChange={handleChange}

            />

            <div className="mt-10">

              <Button

                type="submit"

                loading={loading}

                className="w-auto px-10"

              >

                Save Changes

              </Button>

            </div>

          </Card>

        </div>

      </form>

    </div>

  );

}