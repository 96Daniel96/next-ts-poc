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
  dot?: JSX.Element;
};

type TimelineProps = {
  items: TimeLineItem[];
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const classes = useStyles();

  return (
    <MuiTimeline align="alternate">
      {items.map(({ title, secondary, timeline, description, dot }) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>{dot}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Box display="flex" flexDirection="column">
                <span style={{ fontSize: '1.3rem' }}>{title}</span>
                <span style={{ fontSize: '1.1rem' }}>{secondary}</span>
                <span style={{ fontSize: '1.1rem' }}>{timeline}</span>
                <span style={{ fontSize: '0.950rem' }}>{description}</span>
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Box display="flex" flexDirection="column">
              <span style={{ fontSize: '1.3rem' }}>Title</span>
              <span style={{ fontSize: '1.1rem' }}>Secondary</span>
              <span style={{ fontSize: '0.950rem' }}>Descrition</span>
            </Box>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
     */}
    </MuiTimeline>
  );
};

export default Timeline;
