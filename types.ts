import { Profile, Server, Member } from "@prisma/client";
import { Server as NetServer, Socket } from 'net'; 
import { NextApiRequest, NextApiResponse } from "next";
import { Server as SocketIOServer } from 'socket.io';

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & { profile: Profile})[];
} 

export type NextApiResponseServerIo = NextApiResponse & {
    socket: Socket & {
        server: NetServer & {
            io: SocketIOServer
        }
    }
}