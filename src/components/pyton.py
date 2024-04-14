bubble=[4,1,0,8,9,1,12]
# for i in range(len(bubble)-1):
#     for j in range(len(bubble)-1):
#         if bubble[j]>bubble[j+1]:
#             bubble[j],bubble[j+1]=bubble[j+1],bubble[j]


for i in range(len(bubble)-1):
    minn=i
    minval=bubble[i]
    for j in range(i+1,len(bubble)):
        if minval>bubble[j]:
            minn=j
            minval=bubble[j]

    bubble[i],bubble[minn]=bubble[minn],bubble[i]

print(bubble)