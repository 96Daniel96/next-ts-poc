import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTimeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

type TimeLineItem = {
  title: string;
  secondary: string;
  timeline: string;
  description: string;
  notes: string;
  dot?: JSX.Element;
};

type TimelineProps = {
  items: TimeLineItem[];
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const classes = useStyles();

  return (
    <MuiTimeline align="alternate">
      {items.map(({ title, secondary, timeline, description, notes, dot }, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot>{dot}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <div className="d-flex flex-column">
                <span style={{ fontSize: '1.3rem' }}>{title}</span>
                {<span style={{ fontSize: '1.0rem' }}>{secondary}</span>}
                <span style={{ fontSize: '0.950rem', color: 'rgb(81, 59, 44)', marginBottom: '10px' }}>
                  {timeline}
                </span>
                <span style={{ fontSize: '0.950rem', textAlign: 'justify' }}>{description}</span>
                <span style={{ fontSize: '0.950rem', textAlign: 'justify' }}>{notes}</span>
              </div>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};

export default Timeline;
