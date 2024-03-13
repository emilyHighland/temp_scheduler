import { View, Text, StyleSheet, Button, Touchable, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React, { useState } from 'react';
import moment from 'moment';


const formatDate = (dateString) => {
  const date = moment(dateString);
  return date.format('ddd MMM DD');
};

export default function MyScheduleScreen({ navigation }) {
  const INITIAL_DATE = new Date().toUTCString();
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [markedDates, setMarkedDates] = useState({});

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar 
          style = {{
            borderWidth: 1,
            borderRadius: 10, 
            borderColor: '#044839',
            elevation: 4, 
            height: 375,
            width: 375,
          }}
          theme={{
            backgroundColor: '#F5F5F5',
            calendarBackground: '#F5F5F5',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#044839',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#170448',
            dayTextColor: '#2d4150',
            dotColor: '#044839',
            selectedDotColor: '#ffffff',
            arrowColor: '#044839',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#044839',
            indicatorColor: '#044839',
            textMonthFontSize: 26,
          }}
          current={INITIAL_DATE}
          minDate={INITIAL_DATE}
          // maxDate={}
          // monthFormat={'MMMM yyyy'}
          hideExtraDays={true}
          onDayPress={day => {
            console.log('Day pressed:', day);
            setSelected(day.dateString);
          }}
          // disableArrowLeft={true} // when on current month
          markedDates={{
            [selected]: {selected: true, marked: false, selectedColor: '#044839', selectedTextColor: 'white'}
          }}
          
          // periods
          // markingType={'period'}
          // markedDates={{
          //   '' : {startingDay: true, color: 'green'},
          //   '' : {marked: true, color: 'green'},
          //   '' : {endingDay: true, color: 'green'},
          // }}
        
        
        />
      </View>
      <View style={styles.schedule}>
        <View style={styles.scheduleDate}>     
          <Text style={styles.text}>{formatDate(selected)}</Text>
        </View>
        <View style={styles.scheduleDate}>
          <Text style={styles.scheduleText}>
            Canyon Dental {'\n'}
            Dr. Smith {'\n'}
            8-5pm {'\n'}
          </Text>
        </View>
      </View>
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  calendarContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 15,
  },
  schedule: {
    flex: 1,
    flexDirection: 'row',
    padding: 35,
  },
  scheduleDate: {
    flex: 1,
  },
  scheduleText: {
    marginBottom: 5,
    fontSize: 20,
  }
});
