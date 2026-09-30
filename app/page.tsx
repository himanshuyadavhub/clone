import Header from './components/Header';
import VerificationBadge from './components/VerificationBadge';
import CertificateDetails from './components/CertificateDetails';
import GradeDetails from './components/GradeDetails';

export default function Home() {
  return (
    <div className="pageShell">
      <div className="topBand">
        <Header />
      </div>

      <section className="verificationPanel">
        <div className="contentShell contentShellCompact">
          <VerificationBadge />
          <h2 className="verificationTitle">
            AICTE Internship Certificate is successfully verified
          </h2>

          <CertificateDetails />
          <GradeDetails />
        </div>
      </section>
    </div>
  );
}
