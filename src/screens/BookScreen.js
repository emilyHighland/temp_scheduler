import React from "react";
import { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Avatar, Card } from 'react-native-paper';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};


export default function BookScreen({ navigation }) {    
    const [items, setItems] = useState({});

    const loadItems = (day) => {
      setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
  
          if (!items[strTime]) {
            items[strTime] = [];
            
            const numItems = Math.floor(Math.random() * 3 + 1);
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                name: 'Item for ' + strTime + ' #' + j,
                height: Math.max(50, Math.floor(Math.random() * 150)),
                day: strTime
              });
            }
          }
        }
        const newItems = {};
        Object.keys(items).forEach(key => {
          newItems[key] = items[key];
        });
        setItems(newItems);
      }, 100);
    };
  
    const renderItem = (item) => {
      return (
      <TouchableOpacity style={{marginTop: 17, marginRight: 10}}> 
        <Card>
          <Card.Content>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Avatar.Text label="J" />
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>)
    }
  
    return (
      <View style= {{flex: 1}}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2024-02-16'}
          renderItem={renderItem}
        />
      </View>
    );
}
