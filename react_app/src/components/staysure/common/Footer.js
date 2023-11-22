import { EditableArea } from '@magnolia/react-editor';

const Footer = ({
    socialLinks=null,
    reviewStatus=null,
    copyright=null,
    logo=null,
    fotterTextList=null
}) => {
    return(
        <>
        <div className="content-2">
          <div className="div-3">
            <div className="text-wrapper-14">Need Help?</div>
            <div className="link-group">
              <div className="div-3">
                <div className="text-wrapper-15 text-white">Contact us</div>
                <div className="text-wrapper-16 text-white">Complaints</div>
                <div className="text-wrapper-16 text-white">Claims</div>
                <div className="text-wrapper-16 text-white">Reviews</div>
              </div>
              <div className="div-3">
                <div className="text-wrapper-15 text-white">Policy documents</div>
                <div className="text-wrapper-16 text-white">Why Staysure</div>
                <div className="text-wrapper-16 text-white">Affiliates</div>
              </div>
            </div>
          </div>
          <div className="div-3">
            <div className="text-wrapper-14">Company</div>
            <div className="link-group">
              <div className="div-3">
                <div className="text-wrapper-15 text-white">Terms and Conditions</div>
                <div className="text-wrapper-16 text-white">Terms of Business</div>
                <div className="text-wrapper-16 text-white">Privacy Policy</div>
                <div className="text-wrapper-16 text-white">Cookie Policy</div>
              </div>
              <div className="div-3">
                <div className="text-wrapper-15 text-white">Accessibility</div>
                <div className="text-wrapper-16 text-white">Careers</div>
                <div className="text-wrapper-16 text-white">Gender Pay Gap Report</div>
                <div className="text-wrapper-16 text-white">Modern Slavery Statement</div>
              </div>
            </div>
          </div>
          <div className="category-column">
            <div className="text-wrapper-14">Follow us</div>
            <div className="social-links">
                {socialLinks && <EditableArea content={socialLinks} className="clickable-icon" />} 
            </div>
            <div className="trust-container">
              <div className="TP-mini-logos-not">
                {reviewStatus && <EditableArea content={reviewStatus} className="trust-pilot-mini" />}   
              </div>
            </div>
            {copyright && <EditableArea content={copyright} className="text-wrapper-18" />} 
          </div>
        </div>
        <div className="legal">
          {logo && <EditableArea content={logo} className="logo-2" />} 
          {fotterTextList && <EditableArea content={fotterTextList} className="flexcontainer-i" />} 
        </div>
        </>
    );
}

export {
    Footer
}