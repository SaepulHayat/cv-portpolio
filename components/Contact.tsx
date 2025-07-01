import { Section } from "./Section";
import { PERSONAL_INFO } from "@/data/portfolio";
import { EmailIcon, PhoneIcon, LinkedInIcon, PortfolioIcon, LocationIcon, DownloadIcon } from "./icons";

export default function Contact() {
    const contacts = [
        {
            type: "Email",
            value: PERSONAL_INFO.email,
            link: `mailto:${PERSONAL_INFO.email}`,
            icon: <EmailIcon className="w-6 h-6 text-blue-600" />
        },
        {
            type: "Phone",
            value: PERSONAL_INFO.phone,
            link: `tel:${PERSONAL_INFO.phone}`,
            icon: <PhoneIcon className="w-6 h-6 text-green-600" />
        },
        {
            type: "LinkedIn",
            value: PERSONAL_INFO.linkedin,
            link: `https://${PERSONAL_INFO.linkedin}`,
            icon: <LinkedInIcon className="w-6 h-6 text-blue-700" />
        },
        {
            type: "Portfolio",
            value: PERSONAL_INFO.portfolio,
            link: `https://${PERSONAL_INFO.portfolio}`,
            icon: <PortfolioIcon className="w-6 h-6 text-purple-600" />
        },
        {
            type: "Location",
            value: PERSONAL_INFO.location,
            link: "#",
            icon: <LocationIcon className="w-6 h-6 text-red-600" />
        }
    ];

    return (
        <Section title="Contact Information" variant="default">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.link}
                        className="group flex items-center gap-3 p-4 bg-white/80 border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                            {contact.icon}
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {contact.type}
                            </p>
                            <p className="text-gray-600 text-sm font-medium">{contact.value}</p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-8 text-center">
                <a
                    href="/assets/cv-saepul-hayat.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    <DownloadIcon className="w-5 h-5" />
                    Download CV
                </a>
            </div>
        </Section>
    );
}
