# Exploring the Thingsee

After quick research into the thingsee there seems to be be 2 basic ways of interacting with the device. By that I mean way to program the device. 
1. [Thingsee SDK](https://github.com/thingsee/thingsee-sdk)
2. [Thingsee creator](https://app.thingsee.com/#/login)

## Thingsee SDK
Is built on nuttxOS giving a way to interface with the HW that isn't bare metal. Setup and tooling seem quite complicated. It has its own compilers and configuration but there's documenation to follow. There seems to have been a previous capstone project who investigated the thingsee in the context of security of IOT devices. [capstone_project](https://github.com/Python1320/capstone_project)

## Thingsee Creator
This is a way to script events through a web interface that then communicates it to the registered thingsee.

### Getting started
[Guide](https://thingsee.zendesk.com/hc/en-us/articles/203915761-How-to-register-your-device-to-Thingsee-Creator-Cloud)
1. **[Create account](https://app.thingsee.com/#/register)**
2. **Add a device** 
    - to connect the device with the web app you will need to upload a `DEVICE.JSN` file that it will use to identify the device. 

Unable to connect device to the creator. Will have to test at home with a wifi connection.
