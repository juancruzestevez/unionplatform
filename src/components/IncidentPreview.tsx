import { useHistory } from "react-router";
import { Incident } from "../shared/Incident";
import RoutesEnum from "../shared/RoutesEnum";

interface IncidentPreviewProps {
  incident: Incident;
}

const IncidentPreview: React.FC<IncidentPreviewProps> = ({ incident }) => {
  const history = useHistory();

  const incidentRoute = RoutesEnum.INCIDENTS_VIEW.replace(
    ":id",
    incident.id.toString()
  );

  const onClick = (e) => {
    e.preventDefault();
    history.push(incidentRoute);
  };

  return (
    <div className="incident-preview">
      <a href={incidentRoute} onClick={onClick}>
        <h2>{incident.company}</h2>
        <p>{incident.description}</p>
        <span>----------</span>
      </a>
    </div>
  );
};
export default IncidentPreview;
