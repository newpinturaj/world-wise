import { useNavigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
import Button from "./Button";
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // const [searchParams, setSearchParams] = useSearchParams(); // for search query
  const { id } = useParams(); // for Dynamic Params
  const { currentCity, getCities, isLoading } = useCities();
  const navigate = useNavigate();

  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  useEffect(
    function () {
      getCities(id);
    },
    [id]
  );

  // console.log(currentCity);

  const { cityName, emoji, date, notes } = currentCity;
  // console.log(currentCity.cityName);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default City;
