import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import PasskeyModal from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams.admin === 'true';
  
  return (
    <div className="flex h-screen max-h-screen">

        { isAdmin && <PasskeyModal /> }

        <section className="remove-scrollbar container my-auto">
            <div className="sub-container max-w-[496px]">
                <h2 className="text-xl mb-2">HealthPulse</h2>

                <PatientForm />

                <div className="text-14-regular mt-20 flex justify-between">
                    <p className="justify-items-end text-dark-600 xl:text-left">
                        © 2024 HealthPulse
                    </p>
                    <Link href="/?admin=true" className="text-green-500">
                        Admin
                    </Link>
                </div>
            </div>

        </section>
        <Image
           src="/assets/images/onboarding-img.png"
           height={1000}
           width={1000}
           alt="patient"
           className="side-img max-w-[50%]"
        />
    </div>
  );
}

export default Home;
