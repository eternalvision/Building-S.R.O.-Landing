export const Footer = ({ Helpers, Media }) => {
    const formattedPhoneNumber = Helpers.PhoneNumber();

    return (
        <footer className="Footer">
            <ul className="Footer-list">
                <li>
                    <p className="Footer-title">Jsme vždy v kontaktu</p>
                    <ul className="Footer-title__list">
                        <li>
                            <p>Telefonní číslo horké linky:</p>
                            <a
                                href={"tel:" + formattedPhoneNumber}
                                target="_blank"
                                rel="noreferrer">
                                <span>
                                    {formattedPhoneNumber.replace(
                                        /(\+\d{3})(\d{3})(\d{3})(\d{3})/,
                                        "$1 $2 $3 $4"
                                    )}
                                </span>
                            </a>
                            <a href="mailto:example@gmail.com">
                                example@gmail.com
                            </a>
                        </li>
                        <li>
                            <p>Adresa kanceláře:</p>
                            <a
                                href="https://goo.gl/maps/aX5cKtNUgmWUUYcL9?coh=178572&entry=tt"
                                target="_blank"
                                rel="noreferrer">
                                <span>Praha</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <p className="Footer-title">Platební metody</p>
                    <ul>
                        <li>
                            <Media.MoneyImg />
                        </li>
                        <li>
                            <Media.MastercardImg />
                        </li>
                        <li>
                            <Media.VisaImg />
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
};
