import React, {useEffect} from 'react';
import {
  View,
  useColorScheme,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectList from 'react-native-dropdown-select-list';
import {HStack, VStack} from 'react-native-flex-layout';
import {Text, Card} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {getRepos} from '../store/reposSlice';

export function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selected, setSelected] = React.useState('');
  const {repos} = useSelector(state => state?.repos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRepos());
  }, []);
  console.log(repos);

  const data = [
    {key: '1', value: 'Top 10'},
    {key: '2', value: 'Top 20'},
    {key: '3', value: 'Top 50'},
  ];

  const renderItem = ({item}) => (
    <>
      <Card>
        {/* <Card.Title>{item.name}</Card.Title> */}
        {/* <Card.Divider /> */}
        <View
          style={{
            fontSize: 10,
            marginBottom: 5,
            marginTop: 2,
            fontSize: 8,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Text>Trending repository</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../screens/star-icon.webp')}
            />
            <Text> {item.forks} Star</Text>
          </View>
          <Text
            style={{
              backgroundColor: '#CCCC',
              fontSize: 16,
              borderRadius: 4,
              padding: 10,
            }}>
            {item.watchers}K
          </Text>
        </View>

        <View style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{uri: item.owner.avatar_url}}
          />
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Text style={{marginBottom: 3}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: 8,
          }}>
          <Text>Updated 12 hours ago</Text>
          <Text>{item.language}</Text>
        </View>
      </Card>
    </>
  );
  return (
    <View style={{flex: 1}}>
      <Text style={{marginStart: 15, fontSize: 20, marginTop: 15}}>
        Explore repositories
      </Text>
      <HStack m={20}>
        <VStack>
          <SelectList
            setSelected={setSelected}
            data={data}
            inputStyles={{color: isDarkMode ? '#000' : '#442e96'}} //override default styles
            dropdownTextStyles={{color: isDarkMode ? '#000' : '#442e96'}} //override default styles
            onSelect={() => alert(selected)}
          />
        </VStack>
      </HStack>
      <SafeAreaView>
        <FlatList
          data={repos?.data?.items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 100,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
