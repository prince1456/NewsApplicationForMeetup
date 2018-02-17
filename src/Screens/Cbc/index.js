import React, {Component} from 'react'
import {  StyleSheet, Image } from 'react-native'
import { Container, Content, List, ListItem, Text, Card, CardItem, Thumbnail, Button, Icon, Left, Body  } from 'native-base';
import { getCbcNews } from '../../Api'
import moment from 'moment'

class Cbc extends Component{
    state ={
        data: [] 
    }
    componentWillMount(){
        getCbcNews().then(res => this.setState({data: res.articles}))
    }

    render() {
        const {data} = this.state
        return (
           <Container>
               <Content>
               <List dataArray={data}
                    renderRow={(item) =>
                        <Card style={{flex: 0}}>
                        <CardItem>
                          <Left>
                            <Thumbnail source={{uri: items.urlToImage}} />
                            <Body>
                              <Text>{item.author}</Text>
                              <Text note>{moment(item.publishedAt).format("LL")}</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Image source={{uri: items.urlToImage}} style={{height: 200, width: 200, flex: 1}}/>
                            <Text>
                              //Your text here
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem>
                          <Left>
                            <Button transparent textStyle={{color: '#87838B'}}>
                              <Icon name="logo-github" />
                              <Text>1,926 stars</Text>
                            </Button>
                          </Left>
                        </CardItem>
                      </Card>
                    }>
                </List>
               </Content>
            </Container>
        )
    }
}
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
        homeText: {
            fontSize: 26,
        }
    })
export default Cbc