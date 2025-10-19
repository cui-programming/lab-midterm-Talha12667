import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, TextInput, Button } from '../ui';
import { styles } from '../../styles/styles';

const initialData = [
  { id: '1', phrase: 'SubhanAllah', count: 0 },
  { id: '2', phrase: 'Alhamdulillah', count: 0 },
  { id: '3', phrase: 'Allahu Akbar', count: 0 },
];

export default function SearchAndAdd() {
  const [items, setItems] = useState(initialData);
  const [search, setSearch] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const filteredItems = items.filter(it =>
    it.phrase.toLowerCase().includes(search.toLowerCase())
  );

  function handleAdd() {
    const trimmed = newPhrase.trim();
    if (!trimmed) return;

    const exists = items.some(it => it.phrase.toLowerCase() === trimmed.toLowerCase());
    if (exists) return;

    const newItem = {
      id: Date.now().toString(),
      phrase: trimmed,
      count: 0,
    };

    setItems([...items, newItem]);
    setNewPhrase('');
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search & Add</Text>

      <TextInput
        placeholder="Search phrase..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <View style={styles.addRow}>
        <TextInput
          placeholder="Add new phrase..."
          value={newPhrase}
          onChangeText={setNewPhrase}
          style={styles.input}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => (
          <Text style={styles.itemName}>
            {item.phrase} ({item.count})
          </Text>
        )}
      />
    </View>
  );
}

