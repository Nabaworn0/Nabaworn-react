import Worn from '../image/M.jpg';
import '../css/tct.css';

function Student(props) {
  return (
    <main className="container">
      <h2 className="title">Student Profile</h2>

      <section className="student-layout">
        <div className="left">
          <img src={Worn} alt="Nabaworn Limwatthana" />
        </div>

        <div className="right">
          <div className="row">
            <span className="label">Student ID</span>
            <span>{props.stdInfo.stdid}</span>
          </div>

          <div className="row">
            <span className="label">Name</span>
            <span>{props.stdInfo.name}</span>
          </div>

          <div className="row">
            <span className="label">Section</span>
            <span>{props.stdInfo.sect}</span>
          </div>

          <div className="row">
            <span className="label">Telephone</span>
            <span>{props.stdInfo.tel}</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Student;
