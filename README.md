```python
from microbit import *
import radio

radio.on()
radio.config(channel=4)
radio.config(power=7)
radio.config(group=25)

flag = True

while True:
    if flag :
        if button_a.is_pressed() :
            print("Pressed!")
            radio.config(group=2)
            display.clear()
            radio.send("choice")
            flag = False
        else :
            display.show(Image.DUCK)
    else :
        if radio.receive() == "choice" :
            display.show(Image.DUCK)
            flag = True
        else :
            display.show("R")
```

## Exp Guide

교도소 운동루틴을 가이드 합니다.

- 상체 운동 가이드 페이지
- 하체 운동 가이드 페이지
- 전신 운동 가이드 페이지

총 3개의 페이지를 라우팅 하여 제공합니다!

## 개발 내역

하체 운동 ( 죽음의 카드 운동 ) 이 사용가능할 정도의 구현이 완료되었습니다!

- 사용자가 카드의 범위를 지정 가능합니다.
- 카드를 랜덤으로 뽑으면서 운동이 가능합니다.

상체 운동 및 전신 운동 페이지를 브랜치를 분기하여 제작 중 입니다!

## 오 예스!

3명의 같은 학교 학생이 react를 공부하기 위해 시작했습니다.

위 프로젝트를 통해 우리는 우리가 각자 웹을 배포할 수 있을 정도의 경험을 쌓길 원합니다!

### 더 더 더 더더더

---

DB 연결도 하고 싶습니다!

## 시작하기

`yarn` 을 통해 의존성을 설치합니다.

`yarn start` 를 통해 개발모드를 시작합니다.

## ( 배포하기 )

gh-pages를 통해 github.io에 배포합니다.

PR 머지를 통해 master 브랜치로 기능을 업로드합니다.

`yarn deploy` 를 통해 배포합니다.
