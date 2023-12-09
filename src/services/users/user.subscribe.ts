import { AssetHierarchy } from 'src/entities/AssetHierarchy';
import { EntitySubscriberInterface, LoadEvent } from 'typeorm';
import { Server } from 'socket.io';
import { SchedulerRegistry, Timeout } from '@nestjs/schedule';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserSubscriber
  implements EntitySubscriberInterface<AssetHierarchy>
{
  constructor(
    private readonly socketServer: Server
  ) {}
  listenTo(): any {
    return AssetHierarchy;
  }
 
}
