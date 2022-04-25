import Mock from 'mockjs'
import HomeApi from './mockSeverData/home'

Mock.mock('api/home/getData', HomeApi.getStatisticalData)
