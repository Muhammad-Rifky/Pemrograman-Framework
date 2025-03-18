type FooterLinkProps = {
    text: string;
    url: string;
};

function FooterLink({ text, url }: FooterLinkProps) {
    return <a className="transition hoover:text-teal-500" href={url}>{text}</a>;
}

export default function Footer() {
    return (
        <footer className="pt-10 px-8 pb-16 border-t">
            <div className="flex justify-between gap-6">
                <div className="flex gap-6 text-sm font-medium text-zinc-600">
                    <FooterLink text="tentang saya" url="/about_me" />
                    <FooterLink text="Proyek" url="/projects" />
                    <FooterLink text="Esai" url="/contact" />
                </div>
                <p className="text-sm text-zinc-400">© 2023 Muhammad Rifky Harto. All rights reserved. </p>
            </div>
        </footer>
    );
}
