import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className=" p-10 bg-neutral text-neutral-content space-y-5 ">
            <div className='footer md:flex justify-around'>
                <div>
                    <span className="footer-title">ToyTopia</span>
                    <p>A vibrant and playful online marketplace for kids' toys.<br />Discover and support local toy sellers.</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        {/* Tweeter */}
                        <a href='https://x.com/' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.407.111-.84.17-1.284.17-.305 0-.6-.03-.89-.086.634 1.884 2.476 3.268 4.663 3.306-1.622 1.276-3.674 2.035-5.901 2.035-.384 0-.763-.022-1.135-.067 2.099 1.343 4.6 2.268 7.29 2.268 8.701 0 13.465-7.22 13.465-13.465 0-.204-.005-.407-.014-.61A9.624 9.624 0 0024 4.557z"></path></svg></a>
                        {/* Youtube */}
                        <a href='https://www.youtube.com/' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        {/* Facebook */}
                        <a href='https://www.facebook.com/' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path></svg></a>
                    </div>
                </div>
            </div>
            <hr />
            <div  className='text-center'>
                <p>All Rights Reserved . Tyopia @2025</p>
            </div>
        </footer>
    );
};

export default Footer;