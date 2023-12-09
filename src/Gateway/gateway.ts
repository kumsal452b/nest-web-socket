import { Injectable, OnModuleInit } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';
import { AssetHierarchy } from 'src/entities/AssetHierarchy';
import UserSubscriber from 'src/services/users/user.subscribe';
import { Repository } from 'typeorm';
@WebSocketGateway({ cors: true })
@Injectable()
export default class MGateAway implements OnModuleInit {
  @WebSocketServer()
  server: Server;
  constructor(
    @InjectRepository(AssetHierarchy)
    private asset: Repository<AssetHierarchy>,
    private schedulerRegistry: SchedulerRegistry,
  ) {}
  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Connected');
    });

    this.registerSubscribers();
  }

  private registerSubscribers() {
    const reqSubscriber = new UserSubscriber(this.server);
    this.asset.manager.connection.subscribers.push(reqSubscriber);
  }

  @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody() body: any) {
    console.log(body);

    this.server.emit('onMessage', {
      msg: 'New Message',
      content: body,
    });
  }
}
