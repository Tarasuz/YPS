import * as React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

import DashboardColumn from "../../components/DashboardColumn/DashboardColumn";
import { SlidesWrapper } from "./DashboardMainCSS";
import { makeId } from "../../../utils/uniqueID";

import { State } from "../../../models/state/State";
import { Appoint } from "../../../models/state/State";
import { Dispatch } from "redux";

interface P {
  dispatch: Dispatch<any>;
  appoints: Appoint[];
}

class DashboardMain extends React.Component<P> {
  public render() {
    const daysOfWeek = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ];

    const columns = daysOfWeek.map(dayOfWeek => {
      return (
        <DashboardColumn
          appoints={this.props.appoints}
          key={makeId()}
          nameOfColumn={dayOfWeek}
        />
      );
    });

    const sliderSetting = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "30px",
      slidesToShow: 7,
      speed: 500,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
          }
        }
      ]
    };

    return (
      <SlidesWrapper>
        <Slider {...sliderSetting}>{columns}</Slider>
      </SlidesWrapper>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    appoints: state.appoints.items
  };
};

export default connect(mapStateToProps)(DashboardMain);
