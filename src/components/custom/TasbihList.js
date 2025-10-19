import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from '../ui';  
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  // Increment function
  function increment(id) {
    const updated = items.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setItems(updated);
  }

  // Decrement function
  function decrement(id) {
    const updated = items.map(item =>
      item.id === id && item.count > 0
        ? { ...item, count: item.count - 1 }
        : item
    );
    setItems(updated);
  }

  // Render each item
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
      <Button title="+" onPress={() => increment(item.id)} />
      <Button title="-" onPress={() => decrement(item.id)} />
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}


