준비사항

```python
# server/
python -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata movies/fixtures/movies.json
python manage.py runserver

# client/
npm i
npm run serve
```

에러코드
please commit your changes or stash them before you merge
```python
"""
해결방법
1. git stash 입력
2. git pull
3. 수정작업
4. add - commit - push
"""
```
11월 16일

- 기획서 작성 및 개발환경 준비

11월 17일

- server
  
  - 영화, 리뷰, 영화찜, 리뷰좋아요 모델, 시리얼라이즈 구현

- client
  
  - item을 제외한 전체 component 구성
  - server와 연결
  - 회원가입, 로그인까지 완료

11월 18일
- server
  - db 자료 준비

- client 
  - 영화자료 불러오기
  - 로그인, 로그아웃

11월 19일

