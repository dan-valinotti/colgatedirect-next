import React, { FunctionComponent } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import { TabPanelProps, FullWidthTabsProps } from './_types';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

function tabProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
  },
  tabsIndicator: {
    
  },
  tabRoot: {
    marginBottom: 5,
    color: '#d6d6d6',
    padding: '0 20px',
    fontSize: '1.4em',
    flexGrow: 'initial',
    textTransform: 'initial',
    '&$tabSelected': {
      color: '#535353',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& span': {
      alignItems: 'flex-start'
    },
    '&:not($tabSelected):hover': {
      color: '#d9291c'
    }
  },
  tabSelected: {},
  tabPanelContent: {
    padding: '0 20px',
    '& p': {
      marginBottom: '1em'
    }
  }
}));

const FullWidthTabs: FunctionComponent<FullWidthTabsProps> = (props: FullWidthTabsProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        variant="fullWidth"
        textColor="primary"
        onChange={handleChange}
        indicatorColor="primary"
        classes={{ indicator: classes.tabsIndicator }}
      >
      {props.items.map((item, itemIndex) => (
        <Tab
          key={itemIndex}
          label={item.title}
          {...tabProps(itemIndex)}
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
        />
      ))}
      </Tabs>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {props.items.map((item, itemIndex) => (
          <TabPanel
            value={value}
            key={itemIndex}
            index={itemIndex}
          >
            <div
              className={ classes.tabPanelContent }
              dangerouslySetInnerHTML={{__html: item.content}} />
          </TabPanel>
        ))}
      </SwipeableViews>
    </div>
  );
}

export default FullWidthTabs;
