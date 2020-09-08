#!/usr/bin/python3
import argparse


def check(login, password):
    if login.lower() == "jkritter" and password.lower() == "djomb":
        print("Bravo, c'est gagné")
    else:
        print("Dommage")


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("login", help="login")
    parser.add_argument("password", help="password")
    args = parser.parse_args()
    check(args.login, args.password)
