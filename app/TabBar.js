import { View, Text, Pressable, StyleSheet} from 'react-native';

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View 
    //style={{ flexDirection: 'row' }}
    style={styles.tabBarStyle}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarButtonStyle}
            
          >
            <Text style={{ 
                            color: 'white',
                            fontSize: 8,
                        }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        elevation: 5,
        backgroundColor: '#22262b',
       
    },
    

    tabBarButtonStyle: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3%',
        fontSize: 8,
    },

    tabBarTextStyle: {
        
    }

})