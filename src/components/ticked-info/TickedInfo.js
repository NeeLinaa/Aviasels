import React from 'react';
import PropTypes from 'prop-types';
import { format, add } from 'date-fns';
import { getNumberTransfers, showTransfers, timeFormatting } from '../../utilits';

import classes from './TickedInfo.module.scss';

const TickedInfo = ({ dataInfo }) => {
  function showTickedInfo(data) {
    const duration = add(new Date(dataInfo.date), { minutes: dataInfo.duration });

    return (
      <div className={classes.tickedInfo} key={data.duration}>
        <div className={classes.tickedInfoBlock}>
          <div className={classes.tickedInfoBlockText}>
            {data.origin}-{data.destination}
          </div>
          <div className={classes.tickedInfoBlockInfo}>{`${format(new Date(data.date), 'p')} - ${format(
            new Date(duration),
            'p'
          )}`}</div>
        </div>
        <div className={classes.tickedInfoBlock}>
          <div className={classes.tickedInfoBlockText}>В ПУТИ</div>
          <div className={classes.tickedInfoBlockInfo}>{timeFormatting(data.duration)}</div>
        </div>
        <div className={classes.tickedInfoBlock}>
          <div className={classes.tickedInfoBlockText}>{getNumberTransfers(data.stops)}</div>
          <div className={classes.tickedInfoBlockInfo}>{showTransfers(data.stops)}</div>
        </div>
      </div>
    );
  }

  return <div>{showTickedInfo(dataInfo)}</div>;
};

TickedInfo.defaultProps = {
  dataInfo: {},
};

TickedInfo.propTypes = {
  dataInfo: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    date: PropTypes.string,
    stops: PropTypes.array,
    duration: PropTypes.number,
  }),
};

export default TickedInfo;
