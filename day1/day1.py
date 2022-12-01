def main():
    most_cal = 0 
    current_cal = 0
    cal_list = []
    with open('input.txt', 'r') as infile:
        for line in infile:
            print(current_cal)
            if(line == ("\n")):
                print("newline")
                cal_list.append(current_cal)
                if current_cal > most_cal:
                    most_cal = current_cal
                    current_cal = 0
                    continue
                else:
                    current_cal = 0
                    continue
            current_cal += int(line)  
        print(most_cal)          
        cal_list.sort()
        t3 = cal_list[-3:]
        for num in t3:
            most_cal += num
        print(most_cal)


if __name__ == "__main__":
    main()