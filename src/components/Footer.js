import React, {useState} from 'react';

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    const [isActive, setIsActive] = useState(false);

    const handle= () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <section className="footerWrapper section">
                <div className="footer-bottom">
                    <div className="copyright">
                        <span onClick={handle}>{isActive ? ' villagef' : `©`}</span> Copyright  {year} RPE Analytics
                    </div>
                </div>
            </section>
        </>
    )
}
