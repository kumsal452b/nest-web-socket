import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssetHierarchy } from 'src/entities/AssetHierarchy';
import { Repository } from 'typeorm';
import { Server } from 'socket.io';
import { SchedulerRegistry, Timeout } from '@nestjs/schedule';
import User from 'src/entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(AssetHierarchy)
    private astMtrRepo: Repository<AssetHierarchy>,
    @InjectRepository(User)
    private users: Repository<User>,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

  async edit(dto: any) {
    return this.astMtrRepo.save(dto);
  }
  @Timeout(1000)
  handleTimeout() {
    console.log('Calling method once after timeout of 3 seconds');
    this.countDown();
  }
  async findOne(email: string): Promise<any> {
    return this.users.findOne({ where: { email } });
  }
  async register(object: any) {
    try {
      await this.users.save(object);
      return object;
    } catch (error) {
      return undefined;
    }
  }
  markEmailAsConfirmed(user: any) {
    user.isEmailConfirmed = true;
    return this.users.save(user);
  }
  countDown() {
    var theCountDownTime = new Date().setMinutes(new Date().getMinutes() + 10);
    const server = (this.astMtrRepo.manager.connection.subscribers[0] as any)
      .socketServer as Server;
    let theDistance = '';
    const callback = () => {
      var now = new Date().getTime();
      var distance = theCountDownTime - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let theResult =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
      server.emit('onMessage', {
        msg: 'New Message',
        content: theResult,
      });
      if (distance < 0) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(callback, 1000);
    this.schedulerRegistry.addInterval('Countdown', interval);
  }
}
