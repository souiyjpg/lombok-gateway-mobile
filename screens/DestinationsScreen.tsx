import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const destinations = [
  {
    id: 'gili-trawangan',
    title: 'Gili Trawangan',
    description: 'The most popular tropical island in North Lombok: white sand, snorkeling, diving, stunning sunsets, and lively nightlife without motor vehicles.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7a9e2be1-b1e8-4154-bb76-1c7767310968.png',
  },
  {
    id: 'pink-beach',
    title: 'Pink Beach',
    description: 'A beach with unique and beautiful pink sand, perfect for enjoying clear waters, boat trips to small islands, and epic photos.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cc7d7edf-c125-4abf-babe-4a050446c1ab.png',
  },
  {
    id: 'senggigi-beach',
    title: 'Senggigi Beach',
    description: 'The iconic beach in West Lombok, famous for sunsets, canoeing, beginner surfing, seafood culinary, and exotic resort atmosphere.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5d6154dd-a0a2-4c74-a149-ce15b173c13d.png',
  },
  {
    id: 'sade-village',
    title: 'Sade Village',
    description: 'An authentic Sasak traditional village, traditional houses, weaving activities, cultural attractions, and local hospitality.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b279da1-2bc3-4618-9772-e831692112f2.png',
  },
  {
    id: 'tiu-kelep-waterfall',
    title: 'Tiu Kelep Waterfall',
    description: 'The most famous waterfall in North Lombok, suitable for trekking, playing in the water, and experiencing the refreshing atmosphere of Senaru River.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eda12ada-d11a-4763-941a-599c92f9581d.png',
  },
  {
    id: 'sembalun',
    title: 'Sembalun',
    description: 'Valley at the foot of Mount Rinjani, stunning sunrise views, many Instagrammable spots (Selong Hill, Pergasingan), fresh vegetables & popular trekking routes.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cb350665-c1f0-48e2-8244-b2d43687a4b7.png',
  },
];

export default function DestinationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Destinations</Text>
      {destinations.map((dest) => (
        <View key={dest.id} style={styles.card}>
          <Image source={{ uri: dest.image }} style={styles.image} />
          <Text style={styles.cardTitle}>{dest.title}</Text>
          <Text style={styles.cardDescription}>{dest.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4ff',
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#1e40af',
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1e40af',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#374151',
  },
});
