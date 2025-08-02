import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';

const packages = {
  'sasak-tour': {
    title: 'Sasak Tour',
    description: 'Explore the culture and traditions of Sasak Tribe and become a local:\n\n• Banyumulek: Famous pottery village.\n• Sukarara: Central of traditional weaving in Lombok.\n• Sade or Ende: Traditional Sasak House.\n• Kuta Mandalika: Beautiful beach.',
    price: '$35 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1529413d-9ce7-4765-bb05-0f23c3925021.png',
  },
  'hidden-waterfall-tour': {
    title: 'Hidden Waterfall and Village Private Daily Tour',
    description: 'Enjoy the secret gems in nature beauty and culture by visiting:\n\n• Sukarara: Weaving village and local life sharing tradition.\n• Benang Setokel: Stunning waterfall with incredible views.\n• Benang Kelambu: Save your moment in beauty waterfall with a tranquil atmosphere.',
    price: '$42 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d2b2ecf-8d96-46d2-892e-d93609330244.png',
  },
  'secret-island-snorkeling': {
    title: 'Secret Island Snorkeling Trip',
    description: 'Experience the underwater beauty by snorkeling at:\n\n• Gili Nanggu: Best snorkeling spot with thousand fishes and beautiful coral reefs.\n• Gili Sudak: Quite Island with beauty view to enjoy lunch in the trip.\n• Gili Kedis: A small island perfect for taking pictures, chill, sun bathing, swim and little snorkeling.',
    price: '$56 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24ef108b-169a-446b-b1a7-2ccc04fdd852.png',
  },
  'snorkeling-3-gilis': {
    title: 'Snorkeling 3 Gilis Private Daily Tour',
    description: 'Explore the beauty of the three Gilis by snorkeling at:\n\n• Gili Air: Island famous for its underwater beauty.\n• Gili Meno: Fish & Statue snorkeling spot.\n• Gili Trawangan: Turtle snorkeling spot and Island hopping.',
    price: '$78 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c2c13c51-046b-4c89-b947-8729c2a661ea.png',
  },
  'pink-beach-snorkeling': {
    title: 'Pink Beach Snorkeling Daily Trip',
    description: 'Enjoy the unique beauty of Pink Beach with snorkeling and exploration:\n\n• Sand Island: A small island with beautiful white sand.\n• Gili Petelu: Fish garden snorkeling spot.\n• Pink Beach: A beach with pink sand.\n• Gili Gambir: Colourful coral reef snorkeling.\n• Pink Beach 2: A beach with pink sand.',
    price: '$69 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e07797c4-702b-492e-a77c-c47ed155af7d.png',
  },
  'senaru-waterfalls': {
    title: 'Senaru Waterfalls North Lombok Daily Trip',
    description: 'Visit the stunning waterfalls in North Lombok:\n\n• Sendang Gile Waterfall: A beautiful and easily accessible waterfall.\n• Tiu Kelep Waterfalls: Spectacular waterfalls with amazing natural views.\n• Villa Hantu: An interesting place for photos and enjoying the view.\n• Malimbu Hill: photo stop with three gili\'s view.',
    price: '$47 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48c608b6-b5cb-4582-a053-f018059004c8.png',
  },
  'linkcross-lombok-tour': {
    title: 'Linkcross Lombok Daily Tour',
    description: 'Experience the cultural and natural beauty of Lombok:\n\n• Senaru Waterfalls: Sendang gile and tiu kelep waterfall.\n• Sembalun: Scenic village with beautiful rice fields.\n• Rumah adat Desa Beleq: Traditional Sasak houses.\n• Bukit Selong: Panoramic viewpoint with garden carpet.',
    price: '$52 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cb350665-c1f0-48e2-8244-b2d43687a4b7.png',
  },
  'secret-island-snorkeling-daily': {
    title: 'Secret Island Snorkeling Daily Trip',
    description: 'Discover hidden snorkeling gems around Lombok:\n\n• Gili Gede: Known for its blue coral reef.\n• Gili Layar: Beautiful island for having lunch with excellent snorkeling spots.\n• Gili Renggit: Get your luck to find wild turtles in Snorkeling.',
    price: '$60 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24ef108b-169a-446b-b1a7-2ccc04fdd852.png',
  },
  'gili-kondo-snorkeling': {
    title: 'Gili Kondo Snorkeling Trip',
    description: 'Explore the beautiful islands east of Lombok:\n\n• Gili Petagan: Small island with excellent mangrove hopping.\n• Gili Kondo: Pristine beaches and coral reefs.\n• Gili Bidara: Quiet island with beautiful coral reef.\n• Gili Kapal: Quiet sand island with private Island feel.',
    price: '$75 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24ef108b-169a-446b-b1a7-2ccc04fdd852.png',
  },
};

export default function PackageDetailsScreen({ route }) {
  const { packageId } = route.params;
  const pkg = packages[packageId];

  const handleBookNow = () => {
    Alert.alert(
      'Book This Package',
      `Would you like to book "${pkg.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'WhatsApp',
          onPress: () => {
            const message = `Hi! I'm interested in booking the ${pkg.title} package (${pkg.price}). Can you provide more details?`;
            Linking.openURL(`https://wa.me/6282147910321?text=${encodeURIComponent(message)}`);
          },
        },
        {
          text: 'Email',
          onPress: () => {
            const subject = `Booking Inquiry: ${pkg.title}`;
            const body = `Hi,\n\nI'm interested in booking the ${pkg.title} package.\n\nPrice: ${pkg.price}\n\nPlease provide more details about availability and booking process.\n\nThank you!`;
            Linking.openURL(`mailto:support@lombokgateway.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
          },
        },
      ]
    );
  };

  if (!pkg) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Package not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: pkg.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{pkg.title}</Text>
        <Text style={styles.description}>{pkg.description}</Text>
        <Text style={styles.price}>{pkg.price}</Text>
        
        <TouchableOpacity style={styles.bookButton} onPress={handleBookNow}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>What's Included:</Text>
          <Text style={styles.infoText}>• Professional local guide</Text>
          <Text style={styles.infoText}>• Transportation</Text>
          <Text style={styles.infoText}>• Entrance fees</Text>
          <Text style={styles.infoText}>• Lunch (where applicable)</Text>
          <Text style={styles.infoText}>• Snorkeling equipment (for water activities)</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Important Notes:</Text>
          <Text style={styles.infoText}>• Minimum 2 participants required</Text>
          <Text style={styles.infoText}>• Weather dependent</Text>
          <Text style={styles.infoText}>• Comfortable walking shoes recommended</Text>
          <Text style={styles.infoText}>• Bring sunscreen and hat</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4ff',
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#1e40af',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 12,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2563eb',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
  contentContainer: {
    padding: 4,
  },
  bookButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
    lineHeight: 18,
  },
});
