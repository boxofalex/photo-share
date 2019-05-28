import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";

import styles from "./Admin.module.scss";

const labels = ["ЯНВ", "ФЕВ", "МАР", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"];

const dataset = {
  label: "Загружено фотографий, шт",
  fill: false,
  lineTension: 0.1,
  backgroundColor: "#413F54",
  borderColor: "#413F54",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  pointBorderColor: "#413F54",
  pointBackgroundColor: "#fff",
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: "#413F54",
  pointHoverBorderColor: "rgba(220,220,220,1)",
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data: [],
};

class Admin extends Component {
  state = {
    configChartData: null,
  };

  componentDidMount() {
    const { fetchUsers, selectedUser } = this.props;
    fetchUsers();
    if (selectedUser) {
      const monthData = this.calculateUploadsPerMonth(selectedUser.photos);
      this.configActivityChartData(monthData);
    }
  }

  componentDidUpdate(prevProps) {
    const { selectedUser } = this.props;
    if (selectedUser !== prevProps.selectedUser) {
      if (selectedUser) {
        const monthData = this.calculateUploadsPerMonth(selectedUser.photos);
        this.configActivityChartData(monthData);
      }
    }
  }

  selectUser = id => {
    const { fetchUser } = this.props;
    fetchUser(id);
  };

  calculateUploadsPerMonth = photos => {
    const currentYear = new Date().getFullYear();
    const initMonthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (photos) {
      photos.forEach(item => {
        const uploadImageDate = new Date(item.uploadTime);
        const uploadMonth = uploadImageDate.getMonth();
        const uploadYear = uploadImageDate.getFullYear();
        if (uploadYear === currentYear) {
          initMonthData[uploadMonth] += 1;
        }
      });
    }
    return initMonthData;
  };

  configActivityChartData = data => {
    const totalUploadsForYear = data.reduce((total, item) => {
      return total + item;
    }, 0);
    if (totalUploadsForYear > 0) {
      const chartData = { labels, datasets: [{ ...dataset, data }] };
      this.setState({ configChartData: chartData });
      return;
    }
    this.setState({ configChartData: null });
  };

  render() {
    const { listOfUsers, selectedUser } = this.props;
    const { configChartData } = this.state;

    return (
      <div className={styles.list_active}>
        <div className={styles.listOfUsers}>
          <Typography component="h2" variant="h2">
            Список пользователей:
          </Typography>
          <ul className={styles.listOfUsers_list}>
            {listOfUsers ? (
              listOfUsers.map(user => {
                return (
                  <Button
                    className={styles.user}
                    key={user.login}
                    onClick={() => this.selectUser(user._id)}
                    disableRipple>
                    {user.login}
                  </Button>
                );
              })
            ) : (
              <Typography component="h3" variant="h3">
                Нет зарегистрированных пользователей
              </Typography>
            )}
          </ul>
        </div>
        <div className={styles.selectedUser}>
          <Typography component="h2" variant="h2">
            Дополнительная информация
          </Typography>
          {selectedUser ? (
            <Fragment>
              <div className={styles.selectedUser_login}>
                <Typography component="h3" variant="h3">
                  <span>Пользователь:</span> {selectedUser.login}
                </Typography>
              </div>
              <div className={styles.selectedUser_activity}>
                <Typography component="h3" variant="h3">
                  Активность пользователя с начала года:
                </Typography>
                {configChartData ? (
                  <Line data={configChartData} />
                ) : (
                  <Typography component="h4" variant="h4">
                    Нет данных
                  </Typography>
                )}
              </div>
              <div className={styles.selectedUser_images}>
                <Typography component="h3" variant="h3">
                  Список загруженных фотографий:
                </Typography>
                {selectedUser.photos.length > 0 ? (
                  <ul>
                    {selectedUser.photos.map(item => {
                      return (
                        <Link key={item.name} to={`/photo/${item._id}`}>
                          <li>{item.name}</li>
                        </Link>
                      );
                    })}
                  </ul>
                ) : (
                  <Typography component="h4" variant="h4">
                    Нет загруженных фотографий
                  </Typography>
                )}
              </div>
            </Fragment>
          ) : (
            <Typography component="h3" variant="h3">
              Пользователь не выбран
            </Typography>
          )}
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  listOfUsers: PropTypes.array.isRequired,
  selectedUser: PropTypes.any,
};

export default Admin;
