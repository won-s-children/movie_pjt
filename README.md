준비사항

```python
# server/
python -m venv venv
source venv/Scripts/activate
pip install -r requirements
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

# client/
npm i
npm run serve
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
    
