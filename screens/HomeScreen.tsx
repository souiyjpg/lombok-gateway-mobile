import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const packages = [
  {
    id: 'sasak-tour',
    title: 'Sasak Tour',
    description: 'Explore the culture and traditions of Sasak Tribe and become a local:\n\n• Banyumulek: Famous pottery village.\n• Sukarara: Central of traditional weaving in Lombok.\n• Sade or Ende: Traditional Sasak House.\n• Kuta Mandalika: Beautiful beach.',
    price: '$35 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1529413d-9ce7-4765-bb05-0f23c3925021.png',
  },
  {
    id: 'hidden-waterfall-tour',
    title: 'Hidden Waterfall and Village Private Daily Tour',
    description: 'Enjoy the secret gems in nature beauty and culture by visiting:\n\n• Sukarara: Weaving village and local life sharing tradition.\n• Benang Setokel: Stunning waterfall with incredible views.\n• Benang Kelambu: Save your moment in beauty waterfall with a tranquil atmosphere.',
    price: '$42 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d2b2ecf-8d96-46d2-892e-d93609330244.png',
  },
  {
    id: 'secret-island-snorkeling',
    title: 'Secret Island Snorkeling Trip',
    description: 'Experience the underwater beauty by snorkeling at:\n\n• Gili Nanggu: Best snorkeling spot with thousand fishes and beautiful coral reefs.\n• Gili Sudak: Quite Island with beauty view to enjoy lunch in the trip.\n• Gili Kedis: A small island perfect for taking pictures, chill, sun bathing, swim and little snorkeling.',
    price: '$56 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24ef108b-169a-446b-b1a7-2ccc04fdd852.png',
  },
  {
    id: 'snorkeling-3-gilis',
    title: 'Snorkeling 3 Gilis Private Daily Tour',
    description: 'Explore the beauty of the three Gilis by snorkeling at:\n\n• Gili Air: Island famous for its underwater beauty.\n• Gili Meno: Fish & Statue snorkeling spot.\n• Gili Trawangan: Turtle snorkeling spot and Island hopping.',
    price: '$78 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c2c13c51-046b-4c89-b947-8729c2a661ea.png',
  },
  {
    id: 'pink-beach-snorkeling',
    title: 'Pink Beach Snorkeling Daily Trip',
    description: 'Enjoy the unique beauty of Pink Beach with snorkeling and exploration:\n\n• Sand Island: A small island with beautiful white sand.\n• Gili Petelu: Fish garden snorkeling spot.\n• Pink Beach: A beach with pink sand.\n• Gili Gambir: Colourful coral reef snorkeling.\n• Pink Beach 2: A beach with pink sand.',
    price: '$69 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e07797c4-702b-492e-a77c-c47ed155af7d.png',
  },
  {
    id: 'senaru-waterfalls',
    title: 'Senaru Waterfalls North Lombok Daily Trip',
    description: 'Visit the stunning waterfalls in North Lombok:\n\n• Sendang Gile Waterfall: A beautiful and easily accessible waterfall.\n• Tiu Kelep Waterfalls: Spectacular waterfalls with amazing natural views.\n• Villa Hantu: An interesting place for photos and enjoying the view.\n• Malimbu Hill: photo stop with three gili\'s view.',
    price: '$47 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48c608b6-b5cb-4582-a053-f018059004c8.png',
  },
  {
    id: 'linkcross-lombok-tour',
    title: 'Linkcross Lombok Daily Tour',
    description: 'Experience the cultural and natural beauty of Lombok:\n\n• Senaru Waterfalls: Sendang gile and tiu kelep waterfall.\n• Sembalun: Scenic village with beautiful rice fields.\n• Rumah adat Desa Beleq: Traditional Sasak houses.\n• Bukit Selong: Panoramic viewpoint with garden carpet.',
    price: '$52 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cb350665-c1f0-48e2-8244-b2d43687a4b7.png',
  },
  {
    id: 'secret-island-snorkeling-daily',
    title: 'Secret Island Snorkeling Daily Trip',
    description: 'Discover hidden snorkeling gems around Lombok:\n\n• Gili Gede: Known for its blue coral reef.\n• Gili Layar: Beautiful island for having lunch with excellent snorkeling spots.\n• Gili Renggit: Get your luck to find wild turtles in Snorkeling.',
    price: '$60 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24ef108b-169a-446b-b1a7-2ccc04fdd852.png',
  },
  {
    id: 'gili-kondo-snorkeling',
    title: 'Gili Kondo Snorkeling Trip',
    description: 'Explore the beautiful islands east of Lombok:\n\n• Gili Petagan: Small island with excellent mangrove hopping.\n• Gili Kondo: Pristine beaches and coral reefs.\n• Gili Bidara: Quiet island with beautiful coral reef.\n• Gili Kapal: Quiet sand island with private Island feel.',
    price: '$75 /pax (min. 2 pax)',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24ef108b-169a-446b-b1a7-2ccc04fdd852.png',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Explore the Stunning Beauty of Lombok</Text>
        <Text style={styles.heroSubtitle}>Discover hidden paradises and unforgettable adventures with us!</Text>
        <TouchableOpacity style={styles.heroButton} onPress={() => navigation.navigate('Destinations')}>
          <Text style={styles.heroButtonText}>Start Your Adventure</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Featured Packages in Lombok Gateway</Text>
      <Text style={styles.sectionSubtitle}>Start your adventure now! Choose from our excellent services for a hassle-free travel experience.</Text>

      {packages.map((pkg) => (
        <TouchableOpacity
          key={pkg.id}
          style={styles.card}
          onPress={() => navigation.navigate('PackageDetails', { packageId: pkg.id })}
        >
          <Image source={{ uri: pkg.image }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{pkg.title}</Text>
          <Text style={styles.cardDescription}>{pkg.description}</Text>
          <Text style={styles.cardPrice}>{pkg.price}</Text>
          <Text style={styles.cardButton}>View Details & Book Now</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('Destinations')}>
        <Text style={styles.viewAllButtonText}>View All Packages</Text>
      </TouchableOpacity>

      {/* Destinations Section */}
      <View style={styles.destinationsSection}>
        <Text style={styles.sectionTitle}>The Wonderland in Lombok</Text>
        <Text style={styles.sectionSubtitle}>Let's admire nature beauty and enjoy the local life in Lombok.</Text>
        <TouchableOpacity style={styles.destinationsButton} onPress={() => navigation.navigate('Destinations')}>
          <Text style={styles.destinationsButtonText}>View All Destinations</Text>
        </TouchableOpacity>
      </View>

      {/* Gallery Section */}
      <View style={styles.gallerySection}>
        <Text style={styles.sectionTitle}>Wonderlust Journey</Text>
        <Text style={styles.sectionSubtitle}>Take your fun in Lombok as your best experience in your holiday.</Text>
        <TouchableOpacity style={styles.galleryButton} onPress={() => navigation.navigate('Gallery')}>
          <Text style={styles.galleryButtonText}>View Gallery</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Need Help? We're Ready!</Text>
        <Text style={styles.contactText}>The Lombok Gateway team is ready to assist you at every stage of your journey. Don't hesitate to contact us!</Text>
        <View style={styles.contactButtons}>
          <TouchableOpacity style={[styles.contactButton, styles.emailButton]} onPress={() => Linking.openURL('mailto:support@lombokgateway.com')}>
            <Text style={styles.contactButtonText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.contactButton, styles.whatsappButton]} onPress={() => Linking.openURL('https://wa.me/6282147910321')}>
            <Text style={styles.contactButtonText}>WhatsApp</Text>
          </TouchableOpacity>
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
  hero: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  heroButton: {
    backgroundColor: '#1e40af',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  heroButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#374151',
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
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1e40af',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  cardPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#2563eb',
    marginBottom: 12,
  },
  cardButton: {
    color: 'white',
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  viewAllButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  viewAllButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contactSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 16,
  },
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contactButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  emailButton: {
    backgroundColor: '#2563eb',
  },
  whatsappButton: {
    backgroundColor: '#22c55e',
  },
  contactButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  destinationsSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  destinationsButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  destinationsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  gallerySection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  galleryButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  galleryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
