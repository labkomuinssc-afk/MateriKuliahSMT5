import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].tint,
        drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        drawerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        }
      }}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          drawerIcon: ({ color }) => (
            <IconSymbol size={24} name="house.fill" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          drawerLabel: 'Explore',
          title: 'Explore',
          drawerIcon: ({ color }) => (
            <IconSymbol size={24} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
          drawerIcon: ({ color }) => (
            <IconSymbol size={24} name="person.fill" color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
